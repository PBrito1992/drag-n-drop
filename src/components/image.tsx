import { FC, PropsWithChildren } from "react";
import { Draggable } from "react-beautiful-dnd";

type TImage = {
  draggableId: string;
  id: number;
};

const Image: FC<PropsWithChildren<TImage>> = ({ draggableId, id }) => (
  <Draggable draggableId={draggableId} index={id}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={`w-40 h-40 bg-yellow-600 ${
          snapshot.isDragging ? "opacity-50" : ""
        }`}
      />
    )}
  </Draggable>
);

export { Image };
