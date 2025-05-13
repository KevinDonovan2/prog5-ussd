using System;

class Objet
{
    public string Nom { get; }
    public bool Disponible { get; private set; } = true;
    public DateTime? DateRetour { get; private set; }

    public Objet(string nom)
    {
        Nom = nom;
    }

    public void Reserver(int jours)
    {
        if (!Disponible)
        {
            throw new InvalidOperationException($"{Nom} est déjà réservé jusqu'au {DateRetour}");
        }
        MettreAJourReservation(jours);
    }

    public void VerifierDisponibilite()
    {
        if (DateRetour.HasValue && DateTime.Now >= DateRetour.Value)
        {
            Liberer();
        }
    }

    private void MettreAJourReservation(int jours)
    {
        Disponible = false;
        DateRetour = DateTime.Now.AddDays(jours);
        Console.WriteLine($"{Nom} réservé pour {jours} jour(s). Retour le {DateRetour.Value.ToShortDateString()}");
    }

    private void Liberer()
    {
        Disponible = true;
        DateRetour = null;
    }
}

class Program
{
    static void Main()
    {
        var maison = new Objet("Maison");
        maison.Reserver(4);
        maison.VerifierDisponibilite();
    }
}