import { RiArrowLeftSLine, RiArrowRightDoubleLine, RiArrowLeftDoubleLine, RiArrowRightSLine } from "react-icons/ri"

const Pagination = ({ setPage, page, pageSize }) => {
    const totalData = 274;
    const totalPages = Math.ceil(totalData / pageSize);
    const pageArr = [];

    if (page < 4) {
        for (let i = 1; i <= Math.min(totalPages, 5); i++) {
            pageArr.push(i);
        }
    } else if (page + 2 >= totalPages) {
        for (let i = Math.max(1, totalPages - 4); i <= totalPages; i++) {
            pageArr.push(i);
        }
    } else {
        for (let i = page - 2; i <= page + 2; i++) {
            pageArr.push(i);
        }
    }

    return (
        <div className="flex flex-row text-center text-black justify-center items-center mt-20">
            <button onClick={() => setPage(1)}>
                <RiArrowLeftDoubleLine className={`${page === 1 ? "text-gray-300 cursor-default" : "text-black"} text-2xl`} />
            </button>
            <button onClick={() => page === 1 ? setPage(1) : setPage(page - 1)}>
                <RiArrowLeftSLine className={`${page === 1 ? "text-gray-300 cursor-default" : "text-black"} text-2xl`} />
            </button>
            <div className='flex flex-row gap-1'>
                {pageArr.map((pageNum) => (
                    <button key={`page-${pageNum}`}>
                        <div
                            className={`px-2 py-1 text-sm ${pageNum === page
                                ? 'bg-orange-500 rounded-lg text-white'
                                : 'bg-transparent rounded-lg text-black'
                                }`}
                            onClick={() => setPage(pageNum)}
                        >
                            {pageNum}
                        </div>
                    </button>
                ))}
            </div>
            <button onClick={() => (totalPages > 1 ? setPage(page + 1) : setPage(1))}>
                <RiArrowRightSLine className={`${page === totalPages ? "text-gray-300 cursor-default" : "text-black"} text-2xl`} />
            </button>
            <button onClick={() => setPage(totalPages)}>
                <RiArrowRightDoubleLine className={`${page === totalPages ? "text-gray-300 cursor-default" : "text-black"} text-2xl`} />
            </button>
        </div>
    );
};

export default Pagination