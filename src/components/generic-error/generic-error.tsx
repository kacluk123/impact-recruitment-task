import styles from "./generic-error.module.css";

interface GenericErrorProps {
  errorMessage: string;
}

export const GenericError = ({ errorMessage }: GenericErrorProps) => {
  return <div className={styles.container}>{errorMessage}</div>;
};
