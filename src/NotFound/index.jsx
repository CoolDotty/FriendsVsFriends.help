import './styles.css';

export default function NotFound({ cardSearch }) {
  return (
    <div className="error">
      No results for &ldquo;{cardSearch}&rdquo;
      <br />
      💔
    </div>
  );
}
