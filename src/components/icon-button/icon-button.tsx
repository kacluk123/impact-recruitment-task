import styles from "./icon-button.module.css";

interface IconButtonProps {
  title: string;
}

export const IconButton = ({
  children,
  title,
}: React.PropsWithChildren<IconButtonProps>) => {
  return (
    <button className={styles.container} title={title}>
      {children}
    </button>
  );
};
