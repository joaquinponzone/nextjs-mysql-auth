import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "types/Product";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log('Method', req.method);
    switch (req.method) {
        case 'GET':
            const products = await prisma.product.findMany();
            res.status(200).send(products);
            break;
        case 'POST':
            const newProduct: IProduct = req.body;
            if (!newProduct.code) {
                return res.status(400).send("You need to specify the code for the product");
            }
            const newProductExists = await prisma.product.findUnique({
                where: {
                    code: newProduct.code,
                },
            });
            if (newProductExists) {
                return res.status(400).send("Product already exists");
            } else {
                try {
                    const product = await prisma.product.create({
                        data: {
                            name: newProduct.name,
                            code: newProduct.code,
                            description: newProduct.description,
                            weight: newProduct.weight,
                            type: newProduct.type
                        },
                    });
                    res.status(200).json(product);
                } catch (error) {
                    console.log('Error posting product', error);
                    return res.status(400).send("Product NOT created");
                }

            }
            break;
        case 'PUT': // update all fields
            const productToUpdate: IProduct = req.body;
            if (!productToUpdate.id) {
                return res.status(400).send("You need to specify the ID for the product to update");
            }
            const previousProductToUpdate = await prisma.product.findUnique({
                where: {
                    id: productToUpdate.id,
                },
            });
            if (!previousProductToUpdate) {
                return res.status(400).send("Product not exists");
            } else {
                try {
                    const product = await prisma.product.create({
                        data: {
                            id: previousProductToUpdate.id,
                            name: productToUpdate.name,
                            code: productToUpdate.code ?? 'no-code',
                            description: productToUpdate.description,
                            weight: productToUpdate.weight,
                            type: productToUpdate.type
                        },
                    });
                    res.status(200).json(product);
                } catch (error) {
                    console.log('Error updating product', error);
                    return res.status(400).send("Product NOT updated");
                }
            }
            break;
        default:
            break;
    }
    // if (req.method === 'GET') {
    //     res.status(200).send("hello friend");
    // } else
    //     if (req.method === 'POST') {
    //         const { name, code, description, weight, type }: IProduct = req.body;
    //         if (!code) {
    //             return res.status(400).send("You need to specify the code for the product");
    //         }
    //         const exists = await prisma.product.findUnique({
    //             where: {
    //                 code,
    //             },
    //         });
    //         if (exists) {
    //             return res.status(400).send("Product already exists");
    //         } else {
    //             try {
    //                 const product = await prisma.product.create({
    //                     data: {
    //                         name, code, description, weight, type
    //                     },
    //                 });
    //                 res.status(200).json(product);
    //             } catch (error) {
    //                 console.log('Error posting product', error);
    //                 return res.status(400).send("Product NOT created");
    //             }

    //         }
    //     }
}
