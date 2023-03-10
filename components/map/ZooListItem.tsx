import { Zoo } from "@/lib/types";
import { useAppDispatch } from "@/store";
import { deleteZoo, setSelectedZoo } from "@/store/zoosSlice";

export default function ZooListItem({
  zoo,
  selectedZoo,
}: {
  zoo: Zoo;
  selectedZoo: Zoo;
}) {
  const dispatch = useAppDispatch();

  return (
    <li
      className={`cursor-pointer rounded-md py-3  sm:py-4 ${
        zoo.id === selectedZoo.id ? "bg-gray-100" : "hover:bg-gray-100"
      }`}
      onClick={() => {
        dispatch(setSelectedZoo(zoo));
      }}
    >
      <div className="flex items-center space-x-4 px-2">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-gray-900 ">{zoo.name}</p>
        </div>
        <button
          className="inline-flex items-center rounded-md p-1 text-base font-semibold text-red-500 hover:bg-red-100"
          onClick={(e) => {
            e.preventDefault();
            dispatch(deleteZoo(zoo.id));
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </li>
  );
}
