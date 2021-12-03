import {
  ChangeEvent, FC, useEffect, useRef, useState,
} from 'react';
import { FiEdit } from 'react-icons/fi';

import './index.css';

interface IEditInput {
  placeholder: string;
  required: boolean;
  type: string;
  value: string;
  onChange: (ev: ChangeEvent<HTMLInputElement>) => void;
}

export const EditInput: FC<IEditInput> = ({
  placeholder,
  required,
  type,
  value,
  onChange,
}) => {
  const [edit, setEdit] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const toggleEdit = () => {
    setEdit((prev) => !prev);
  };

  useEffect(() => {
    if (edit) inputRef.current?.focus();
  }, [edit]);

  return (
    <div className="edit-input">
      <input
        ref={inputRef}
        disabled={!edit}
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        required={required}
      />
      <button className={edit ? 'active' : ''} onClick={toggleEdit} type="button">
        <FiEdit />
      </button>
    </div>
  );
};
