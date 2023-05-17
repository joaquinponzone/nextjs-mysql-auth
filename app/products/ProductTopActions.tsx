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
            path: '/export'
        },
        {
            label: 'New product',
            labelColor: 'btn-primary',
            path: '/new'
        }
    ];
    return (
        <div className='justify-end items-center'>
            <div className="collapse sm:collapse-open w-full">
                <input type="checkbox" className="sm:hidden" />
                <div className="collapse-title sm:hidden text-xl font-medium">
                    Mostrar acciones disponibles
                </div>
                <div className="collapse-content w-full flex flex-col sm:flex-row ">
                    {paths.map(item => {
                        return (
                            <div key={item.path} className='flex justify-end w-full p-2 rounded-lg'>
                                <button key={item.path} className={`btn ${item.labelColor} w-full sm:btn-block gap-2`}>
                                    <Link href={item.path}>
                                        {item.label}
                                    </Link>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
}