import { FC, PropsWithChildren } from "react";
import { Droppable } from "react-beautiful-dnd";
import { Image } from "components/image";

type TBox = {
  id: string;
  isSelected: boolean;
};

const Box: FC<PropsWithChildren<TBox>> = ({ id, isSelected }) => (
  <Droppable droppableId={id}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.droppableProps}
        className="w-48 h-48 bg-white border-2 border-black p-2 flex justify-center items-center"
      >
        {isSelected && <Image key={1} id={Number(1)} draggableId={"1"} />}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

export { Box };
