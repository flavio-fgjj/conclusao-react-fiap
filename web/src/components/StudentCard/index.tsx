import {styles} from './styles';

interface StudentCardProps {
  title: string;
  rm: string;
  description: string;
  image: string;
}

export const StudentCard = ({
  image,
  title,
  rm,
  description,
}: StudentCardProps) => {
  return (
    <div style={styles.container}>
      <img src={image} style={styles.image} alt="logo" />
      <div style={styles.body}>
        <h5 style={styles.title}>
          {title} - {rm}
        </h5>
        <p style={styles.description}>{description}</p>
      </div>
    </div>
  );
};
