import { useState } from "react";
import Tag from "../../ui/Tag";
import generateColor from '../../utils/generateColor.js'

export default function Task({task}){
    const favoriteColor = task.favorite ? "yellow" : "currentColor";

    const [colors] = useState(
        Array(task?.tags?.length)
            .fill(null)
            .map(() => generateColor() )
    );

    let tagContent = null;
    if (task?.tags?.length > 0) {
        tagContent = task.tags.map((tag, index) => (
           <Tag key={tag}
           tag={tag}
           color={colors[index] || "#3B82F6"} />
        ));
        
    }
    return (
        <>
        <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                <td>
                    <svg
                        
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke={favoriteColor}
                        fill={favoriteColor}
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        />
                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                    </svg>
                </td>
                <td className="capitalize">{task.title}</td>
                <td>
                    <div>{task.description}</div>
                </td>
                <td>
                    <ul className="flex justify-center gap-1.5 flex-wrap">
                        {tagContent}
                    </ul>
                </td>
                <td className="text-center capitalize">{task.priority}</td>
                <td>
                    <div className="flex items-center justify-center space-x-3">
                        <button
                            className="text-red-500"
                            >
                            Delete
                        </button>
                        <button
                            className="text-blue-500"
                            >
                            Edit
                        </button>
                    </div>
                </td>
            </tr>
        </>
    );
}