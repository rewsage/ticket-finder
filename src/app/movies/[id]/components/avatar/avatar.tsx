import { PictureIcon } from "@/assets/icons";
import styles from "./avatar.module.scss";

function Avatar() {
    return (
        <div className={styles.container}>
            <PictureIcon />
        </div>
    );
}

export { Avatar };
