import { Button } from '../components/button';

const handleClick = () => {
  alert('Botao clicado!');
};

export function LandingPage() {
  return (
    <div>
      <h1>Landing Page</h1>
      <Button
        label="Componente Button"
        onClick={handleClick}
        className="btn-secondary"
      />
    </div>
  );
}
