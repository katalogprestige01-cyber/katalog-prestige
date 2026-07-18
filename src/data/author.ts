// Profil autora (E-E-A-T oparty na DOŚWIADCZENIU, nie na zmyślonych tytułach).
export interface Author {
    name: string;
    role: string;
    bioShort: string;
    bioLong: string;
    credentials: string[];
    sameAs: string[];
    email: string;
}

export const author: Author = {
    name: 'Ewa Sadowska',
    role: 'Pasjonatka wnętrz i materiałów wykończeniowych',
    bioShort:
          'Od ponad 20 lat urządza i wykańcza wnętrza — z obsesją na punkcie dobrych materiałów.',
    bioLong:
          'Od ponad dwóch dekad zajmuje się urządzaniem i wykańczaniem wnętrz — najpierw własnych, ' +
          'potem u rodziny i znajomych, którzy zawsze pytali ją o radę przy wyborze płytek, kamienia ' +
          'czy armatury. Nie kończyła architektury; jej wiedza to setki godzin spędzonych w salonach, ' +
          'składach kamienia i na budowach oraz materiały, które sama wybrała, położyła i sprawdziła ' +
          'w praktyce. W Katalogu Prestige pisze tak, jak doradza znajomym: konkretnie, bez ' +
          'marketingowego lukru, z naciskiem na to, co naprawdę broni się po latach.',
    credentials: [
          'Ponad 20 lat praktyki w urządzaniu i wykańczaniu wnętrz',
          'Dziesiątki własnych i doradzonych realizacji: łazienki, kuchnie, strefy dzienne',
          'Specjalizacja: materiały premium — kamień naturalny, wielkoformaty, armatura designerska',
        ],
    sameAs: [
          // gdy będą: profil Instagram / Pinterest / portfolio (wzmacnia schema Person)
    ],
    email: 'kontakt@katalog-prestige.pl',
};
