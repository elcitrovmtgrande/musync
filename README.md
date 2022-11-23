## Fonctionnement des differents services

### Spotify
L'API de spotify ne permet pas de recuperer autre chose que les informations des pistes enregistrées de l'utilisateur. Chacune assortie d'une preview de 30 secondes.
Pour obtenir les sons en entier, seul un Reverse Engineering sur le site officiel, permet de récupérer les morceaux en entier.

#### Reverse Engineering
En regardant la trace d'une eécoute Spotify sur [l'application web Spotify](https://open.spotify.com/), on observe que les requetes ne que des portions de bytes aà l'API. Le challenge est donc d'essayer de récupérer certains bytes, et au fur et aà mesure que la lecture avance côté client, demander les bytes suivants.
L'URL pour demander ses bytes est le service anonyme [audio-fa.scdn.co](https://audio-fa.scdn.co/audio/).
Le CORS semble également poser problème?.


## Payload des connexions
Lors d'une connexion d'un utilisateur à un service, ce-dernier renvoie les payloads suivants pour chacune des autorisation.

### Apple
`{"authorizationCode": "cece2c0afe10b4fa7aef034015a32d10b.0.svvu.zIMUG18OyQ_CsxLAIqBJFA", "email": null, "fullName": {"familyName": null, "givenName": null, "middleName": null, "namePrefix": null, "nameSuffix": null, "nickname": null}, "identityToken": "eyJraWQiOiJmaDZCczhDIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiaG9zdC5leHAuRXhwb25lbnQiLCJleHAiOjE2NjkxNTgxNjIsImlhdCI6MTY2OTA3MTc2Miwic3ViIjoiMDAwNTU0LjZkY2QwZDRjYzVmMjQ5NjRhZDkwOGE2ZmViZWZjMGEzLjE1NTAiLCJjX2hhc2giOiJJdnZNQ0k1bWJWUDZWR0tHVUxhMWNRIiwiZW1haWwiOiJjb250YWN0Lm1henpvdHRpQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjoidHJ1ZSIsImF1dGhfdGltZSI6MTY2OTA3MTc2Miwibm9uY2Vfc3VwcG9ydGVkIjp0cnVlfQ.sjJH5myysKn19M6zgU1PfpCTNpvs-Vv6UxaUifuj9P4E00_e-ZiADYAz3NrXhnZ3VmVkAQuGn0hf-CGO41nLJ8_XcJUY109zz5Vjf2Tb6kv4A_zsR1ohnCCfqKghFlMFmJjFYKoLyVb0wkvN5O3EpFT-hh5ItoBJEtmAESyzXnWeamAIxTzO0jftUdl61z2Ob26Rib65GC8NZt6t9cHa_YuVIL8jPI7Q4kD65Z7z6N92Rz6TS8Ob5hMiw5ldjvwgsRwi46rVgkSKO367qTwjskPP5Xh7ErMAndgQ6cxpBFXGdBviT9lSBHhPqwdeqhXSZaOBALtfd-3blTgOdfKC5A", "realUserStatus": 1, "state": null, "user": "000554.6dcd0d4cc5f24964ad908a6febefc0a3.1550"}`

## Documentation
- [Get musics Spotify API](https://developer.spotify.com/documentation/general/guides/track-relinking-guide/#track-relinking-in-the-web-api)
- [Get Youtube Auth from Google token](https://developers.google.com/youtube/registering_an_application)

- Apple Music? [API Reference](https://developer.apple.com/documentation/applemusicapi/get_all_library_songs) :
  - Comment recuperer les identifiers des morceaux d'une playlist ?
  - Comment recuperer l'identifier d'une playlist ?
  - => Une fois ces infos, c'est gagné

## Utils
- [Décrypter un JWT token]()