export default function Tag({color, tag}){
    return (
        <>
         <li>
                <span
                    style={{ backgroundColor: `${color}` }}
                    className={`inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6]`}>
                    {tag}
                </span>
            </li>
        </>
    );
}