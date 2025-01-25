import React from "react";

type NestedType = {
  message?: string|null;
};

type PropTypes = {
  component: React.ComponentType<NestedType>;
  message?:string|null;
};

function ComponentProps({ component: Component ,message}: PropTypes) {
  return (
    <div>
      {/* Rendering the passed component with the required prop */}
      <Component message={message} />
    </div>
  );
}

export default ComponentProps;

// Correctly defined LowerComponent with the right syntax and prop usage
export const LowerComponent: React.FC<NestedType> = ({ message }:NestedType) => {
    if (message===undefined)
    return <h1>No Message</h1>
  return (
    <div>
        
      {message} {/* Displaying the message */}
    </div>
  );
};
