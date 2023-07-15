"use client";

import { useToggleState } from "react-stately";
import { useCheckbox } from "react-aria";
import React from "react";

interface CheckboxProps {
  children?: React.ReactNode;
  isSelected: boolean;
  onChange: (checked: boolean) => void;
}

export function Checkbox(props: CheckboxProps) {
  let { children } = props;
  let state = useToggleState(props);
  let ref = React.useRef(null);
  let { inputProps } = useCheckbox(props, state, ref);

  return (
    <label>
      <input {...inputProps} ref={ref} className="mr-2" />
      {children}
    </label>
  );
}
