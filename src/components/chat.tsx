const d = new Date();

const year = d.getFullYear();
const month = d.getMonth() + 1;
const date = d.getDate();
const hour = d.getHours();
const minute = d.getMinutes();

const nowTime = `${year}年${month}月${date}日 ${hour}:${minute}`;

type Props = {
  text: string;
  i: number;
};

export const Chat = (props: Props) => {

  // const deleteItem = (i) => {

  // }

  return (
    <div className="border-t w-9/12 group relative mx-auto flex py-4 animate-fade-in">
      <div className="absolute rounded-md border right-2 group-hover:flex hidden py-1 -top-6 bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 p-1 mx-1 cursor-pointer hover:bg-gray-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 p-1 mx-1 cursor-pointer hover:bg-gray-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 p-1 mx-1 cursor-pointer hover:bg-gray-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.2}
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        </svg>
      </div>
      <h3 className="text-6xl font-bold mx-4 -mt-1">3</h3>
      <div className="">
        <p className="text-lg font-bold">あなた</p>
        <p className="my-2">{props.text}</p>
      </div>
      <p className="ml-auto text-gray-500 text-sm">{nowTime}</p>
    </div>
  );
};
