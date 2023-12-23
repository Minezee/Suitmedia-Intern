import { PiTriangleFill } from "react-icons/pi";

const Dropdown = ({ isOpen, setIsOpen, active, setIsActive, option }) => {
    function handleClick(data) {
        setIsActive(data.value);
        setIsOpen(false);
    }

    const displayLabel = option.find((item) => item.value === active)?.label || active;

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full px-4 py-2 border-gray-400 border flex flex-row items-center w-40 justify-between"
            >
                {displayLabel}
                <PiTriangleFill
                    className={`${isOpen ? "rotate-0" : "rotate-180"} text-gray-500`}
                />
            </button>
            {isOpen ? (
                <div className="w-full absolute z-40 flex flex-col text-start mt-2 rounded-lg bg-white border-gray-400 border">
                    {option.map((data, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(data)}
                            className={`
                ${index === 0 ? "rounded-t-lg " : ""}
                ${index === option.length - 1 ? "rounded-b-lg " : ""}
                ${active === data.value ? "bg-orange-400" : "bg-transparent"}
                hover:bg-orange-400 text-start px-4 py-2`}
                        >
                            {data.label}
                        </button>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default Dropdown;
