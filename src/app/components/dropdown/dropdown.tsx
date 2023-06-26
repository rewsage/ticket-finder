"use client";

import { ArrowIcon } from "@/assets/icons";
import styles from "./dropdown.module.scss";
import { createPortal } from "react-dom";
import { MouseEventHandler, useRef, useState } from "react";
import classNames from "classnames";
import { useOutsideClickListener, useScrollListener } from "@/hooks";

interface DropdownProps {
    title: string;
    options: Record<string, string>;
    onSelect: (optionKey: string) => void;
}

const Dropdown = ({ title, options, onSelect }: DropdownProps) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [selectPosition, setSelectPosition] = useState<{
        x: number;
        y: number;
        width: number;
    } | null>(null);

    const [choosedOption, setChoosedOption] = useState<string | null>(null);

    const optionList = Object.entries(options).map(([key, value], index) => {
        return (
            <button
                className={styles.option}
                onClick={() => handleOptionClick(key, value)}
                key={index}
            >
                {value}
            </button>
        );
    });

    const handleOptionClick = (key: string, value: string) => {
        onSelect(key);
        handleSelectClose();
        setChoosedOption(key === "reset" ? null : value);
    };

    const handleSelectOpen: MouseEventHandler = (e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        setSelectPosition({
            x: bounds.x,
            y: bounds.y + bounds.height,
            width: bounds.width,
        });
    };

    const handleSelectClose = () => {
        setSelectPosition(null);
    };

    useOutsideClickListener(dropdownRef, handleSelectClose);
    useScrollListener(handleSelectClose);

    return (
        <div className={styles.container}>
            <div
                className={classNames(
                    styles.header,
                    selectPosition && styles.opened
                )}
                onClick={selectPosition ? handleSelectClose : handleSelectOpen}
            >
                <button
                    className={classNames(
                        styles.title,
                        choosedOption && styles.active
                    )}
                >
                    {choosedOption ?? title}
                </button>
                <ArrowIcon className={styles.arrowIcon} />
            </div>
            {selectPosition &&
                createPortal(
                    <div
                        ref={dropdownRef}
                        className={styles.select}
                        style={{
                            top: selectPosition.y,
                            left: selectPosition.x,
                            width: selectPosition.width,
                        }}
                    >
                        {optionList}
                    </div>,
                    document.body
                )}
        </div>
    );
};

export { Dropdown };
