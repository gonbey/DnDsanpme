import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const App = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const newItems = Array.from(items);
    const [movedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, movedItem);
    setItems(newItems);
  };

  return (
    <div
      style={{
        listStyle: 'none',
        padding: 0,
        border: '2px solid #000', // 枠線の設定
      }}
    >
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                listStyle: 'none',
                padding: 0,
                border: '2px solid #000', // 枠線の設定
              }}
            >
              {items.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(provided) => (
                    <li
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      style={{
                        padding: '8px',
                        margin: '4px',
                        border: '2px solid #000', // 枠線の設定
                        borderRadius: '4px',
                        backgroundColor: '#f8f8f8',
                        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', // 影の追加
                        ...provided.draggableProps.style,
                      }}
                    >
                      {item}
                    </li>
                  )}
                </Draggable>
              ))}
              <div
                style={{
                  padding: '8px',
                  margin: '4px',
                  border: '2px solid #000', // 枠線の設定
                  borderRadius: '4px',
                  backgroundColor: '#f8f8f8',
                  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', // 影の追加
                }}
              >
                {provided.placeholder}
              </div>
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default App;
