from datetime import date, timedelta

class Objet:
    def __init__(self, nom):
        self.nom = nom
        self.disponible = True
        self.date_retour = None

    def reserver(self, jours):
        if not self.disponible:
            raise Exception(f"{self.nom} est déjà réservé jusqu'au {self.date_retour}")
        self._mettre_a_jour_reservation(jours)

    def verifier_disponibilite(self):
        if self.date_retour and date.today() >= self.date_retour:
            self._liberer()

    def _mettre_a_jour_reservation(self, jours):
        self.disponible = False
        self.date_retour = date.today() + timedelta(days=jours)
        print(f"{self.nom} réservé pour {jours} jour(s). Retour le {self.date_retour}")

    def _liberer(self):
        self.disponible = True
        self.date_retour = None

# Exemple d'utilisation
if __name__ == "__main__":
    voiture = Objet("Voiture")
    voiture.reserver(3)
    voiture.verifier_disponibilite()