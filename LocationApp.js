class Objet {
  constructor(nom) {
    this.nom = nom;
    this.disponible = true;
    this.dateRetour = null;
  }

  reserver(jours) {
    if (!this.disponible) {
      throw new Error(`${this.nom} est déjà réservé jusqu'au ${this.dateRetour}`);
    }
    this._mettreAJourReservation(jours);
  }

  verifierDisponibilite() {
    if (this.dateRetour && new Date() >= this.dateRetour) {
      this._liberer();
    }
  }

  _mettreAJourReservation(jours) {
    const now = new Date();
    this.disponible = false;
    this.dateRetour = new Date(now.setDate(now.getDate() + jours));
    console.log(`${this.nom} réservé pour ${jours} jour(s). Retour le ${this.dateRetour.toDateString()}`);
  }

  _liberer() {
    this.disponible = true;
    this.dateRetour = null;
  }
}

// Exemple d'utilisation
const maison = new Objet("Maison");
maison.reserver(5);
maison.verifierDisponibilite();