import Link from "next/link";

export default function TopActions() {
    const paths = [
        {
            label: 'Import products',
            labelColor: 'btn-info',
            path: '/import-product'
        },
        {
            label: 'Export products',
            labelColor: 'btn-secondary',
            path: '/export-product'
        },
        {
            label: 'New product',
            labelColor: 'btn-primary',
            path: '/new-product'
        }
    ];
    return (
        <div className='flex flex-col flex-1 lg:flex-row lg:flex-auto justify-end gap-4 p-2'>
            {paths.map(item => {
                return (
                    <div key={item.path} className='lg:col col-span-1 flex justify-end w-fit p-4 rounded-lg'>
                        <button className={`btn ${item.labelColor} btn-wide`}>
                            <Link href={item.path}>
                                {item.label}
                            </Link>
                        </button>
                    </div>
                );
            })}
        </div>
    );
}