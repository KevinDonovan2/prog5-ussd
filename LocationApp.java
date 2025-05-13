import java.time.LocalDate;

class Objet {
    private final String nom;
    private boolean disponible;
    private LocalDate dateRetour;

    public Objet(String nom) {
        this.nom = nom;
        this.disponible = true;
    }

    public void reserver(int jours) {
        if (!disponible) {
            throw new IllegalStateException(nom + " est déjà réservé jusqu'au " + dateRetour);
        }
        mettreAJourReservation(jours);
    }

    public void verifierDisponibilite() {
        if (dateRetour != null && !LocalDate.now().isBefore(dateRetour)) {
            liberer();
        }
    }

    private void mettreAJourReservation(int jours) {
        this.disponible = false;
        this.dateRetour = LocalDate.now().plusDays(jours);
        System.out.println(nom + " réservé pour " + jours + " jour(s). Retour le " + dateRetour);
    }

    private void liberer() {
        this.disponible = true;
        this.dateRetour = null;
    }

    public boolean isDisponible() {
        return disponible;
    }
}

// Exemple d'utilisation
public class LocationApp {
    public static void main(String[] args) {
        Objet voiture = new Objet("Voiture");
        voiture.reserver(2);
        voiture.verifierDisponibilite();
    }
}