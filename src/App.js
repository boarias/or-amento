
import { useState } from 'react';

const BudgetForm = () => {
  const [serviceType, setServiceType] = useState('');

  const handleSelectService = (service) => {
    setServiceType(service);
  };

  return (
    <div>
      <h1>Escolha o Serviço</h1>
      <div className="buttons-container">
        <button onClick={() => handleSelectService('aereo')}>Serviço Aéreo</button>
        <button onClick={() => handleSelectService('hospedagem')}>Serviço Hospedagem</button>
      </div>

      {serviceType === 'aereo' && (
        <div>
          <h2>Formulário Aéreo</h2>
          <form>
            <input type="date" placeholder="Data de Ida" />
            <input type="date" placeholder="Data de Volta" />
          </form>
        </div>
      )}

      {serviceType === 'hospedagem' && (
        <div>
          <h2>Formulário Hospedagem</h2>
          <form>
            <input type="text" placeholder="Nome do Hotel" />
            <input type="date" placeholder="Data de Check-in" />
          </form>
        </div>
      )}
    </div>
  );
};

export default BudgetForm;
