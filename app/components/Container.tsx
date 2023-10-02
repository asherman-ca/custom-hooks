import React, { HTMLAttributes } from "react";

const Container = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  props?: any;
}) => {
  return (
    <div {...props} className="p-12">
      {children}
    </div>
  );
};

export default Container;
