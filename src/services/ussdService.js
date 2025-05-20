export const processUssdInput = (text) => {
  if (!text || text.trim() === '') {
    return 'CON Bienvenue au service USSD\n1. Info\n2. Aide\n3. Quitter';
  }

  const inputs = text.split('*');

  switch (inputs[0]) {
    case '1':
      if (inputs.length === 1) {
        return 'CON Info:\n1. Horaires\n2. Adresse\n3. Retour';
      }
      switch (inputs[1]) {
        case '1':
          return 'END Nos horaires sont 9h à 18h.';
        case '2':
          return 'END Notre adresse est 123 rue Exemple.';
        case '3':
          return 'CON Bienvenue au service USSD\n1. Info\n2. Aide\n3. Quitter';
        default:
          return 'END Choix invalide dans Info.';
      }

    case '2':
      return 'END Un agent vous contactera sous peu.';

    case '3':
      return 'END Merci de votre visite !';

    default:
      return 'END Choix invalide. Veuillez réessayer.';
  }
};
