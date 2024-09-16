import { useState } from "react";
import Item from "./Item";

const initialItems = [
  {
    text: "this is task 1",
    id: 1,
  },
  {
    text: "this is task 2",
    id: 2,
  },
];

function TodoComp() {
  const [description, setDescription] = useState("");
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems(() => [...items, item]);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const item = {
      id,
      text: description,
    };
    handleAddItems(item);
    setDescription("");
  }

  return (
    <div className="w-[40%] bg-white rounded-lg shadow-lg pt-5">
      <div className="flex justify-center items-center align-baseline py-6 space-x-6">
        <h1 className="font-bold text-lg">Hello Todo list</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M4 22v-20h16v11.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-14.386h-20v24h10.189c3.163 0 9.811-7.223 9.811-9.614zm-10.967.614c2.258-4.05 3.826-6.13 5.967-7.999l-.278-.641c-2.596 1.616-3.993 2.833-6.106 5.231-1.125-.802-1.76-1.169-2.76-1.654l-.856.792c1.711 1.585 2.64 2.631 4.033 4.271z" />
        </svg>
      </div>

      <div className="flex flex-col md:flex-row justify-center">
        <form action="" onSubmit={handleOnSubmit}>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-gray-200 px-8 py-2 rounded-2xl outline-0"
            placeholder="Enter your task.."
          />
          <button className="bg-rose-400 px-8 py-2 rounded-2xl text-white hover:shadow-md hover:scale-105 transform -translate-x-4">
            Add
          </button>
        </form>
      </div>

      <div className="pb-10 px-12 py-6">
        <ul className="pl-6 space-y-3">
          {items.map((el) => (
            <Item key={el.id} item={el} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoComp;
