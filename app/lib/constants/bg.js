const weatherBackgrounds = {
    '01d': 'https://st4.depositphotos.com/11246114/22951/i/450/depositphotos_229513910-stock-photo-beautiful-blue-sky-clouds-background.jpg',
    '01n': 'https://st4.depositphotos.com/11246114/22951/i/450/depositphotos_229513910-stock-photo-beautiful-blue-sky-clouds-background.jpg',
    '02d': 'https://c1.wallpaperflare.com/preview/232/993/172/sky-blue-nature-weather.jpg',
    '02n': 'https://c1.wallpaperflare.com/preview/232/993/172/sky-blue-nature-weather.jpg',
    '03d': 'https://media.istockphoto.com/id/645173476/photo/cirrocumulus-clouds-cloudscape.jpg?s=612x612&w=0&k=20&c=frZAiiluhRNQF-7rdiztwrvP3Ly95d081uvN-xwSefY=',
    '03n': 'https://media.istockphoto.com/id/645173476/photo/cirrocumulus-clouds-cloudscape.jpg?s=612x612&w=0&k=20&c=frZAiiluhRNQF-7rdiztwrvP3Ly95d081uvN-xwSefY=',
    '04d': 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/625a747a-061b-477d-958f-a0d6cea9e4cb/dax9bd4-dd0da73d-5b6e-415c-b05e-19471f366e5a.jpg/v1/fill/w_1024,h_768,q_75,strp/broken_clouds_by_kevintheman_dax9bd4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvNjI1YTc0N2EtMDYxYi00NzdkLTk1OGYtYTBkNmNlYTllNGNiXC9kYXg5YmQ0LWRkMGRhNzNkLTViNmUtNDE1Yy1iMDVlLTE5NDcxZjM2NmU1YS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2HBtScMyydNDUe606gk2Jd8RHs6iM-76feSI7Dc3sLw',
    '04n': 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/625a747a-061b-477d-958f-a0d6cea9e4cb/dax9bd4-dd0da73d-5b6e-415c-b05e-19471f366e5a.jpg/v1/fill/w_1024,h_768,q_75,strp/broken_clouds_by_kevintheman_dax9bd4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvNjI1YTc0N2EtMDYxYi00NzdkLTk1OGYtYTBkNmNlYTllNGNiXC9kYXg5YmQ0LWRkMGRhNzNkLTViNmUtNDE1Yy1iMDVlLTE5NDcxZjM2NmU1YS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2HBtScMyydNDUe606gk2Jd8RHs6iM-76feSI7Dc3sLw',
    '09d': 'https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=612x612&w=0&k=20&c=2KhHJguvlQvd83c-CJeOiuEKI323gbtSIf1n2sNdXJc=',
    '09n': 'https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=612x612&w=0&k=20&c=2KhHJguvlQvd83c-CJeOiuEKI323gbtSIf1n2sNdXJc=',
    '10d': 'https://c4.wallpaperflare.com/wallpaper/800/334/457/window-raining-rainy-rain-wallpaper-preview.jpg',
    '10n': 'https://c4.wallpaperflare.com/wallpaper/800/334/457/window-raining-rainy-rain-wallpaper-preview.jpg',
    '11d': 'https://media.istockphoto.com/id/1011777484/photo/cloud-storm-sky-with-thunderbolt-over-rural-landscape.jpg?s=612x612&w=0&k=20&c=_PQT1n74nDGrZJqvivJqSIsFY1LWH1sN8cHzbvskKx8=',
    '11n': 'https://media.istockphoto.com/id/1011777484/photo/cloud-storm-sky-with-thunderbolt-over-rural-landscape.jpg?s=612x612&w=0&k=20&c=_PQT1n74nDGrZJqvivJqSIsFY1LWH1sN8cHzbvskKx8=',
    '13d': 'https://media.istockphoto.com/id/863513024/photo/winter-scene-snowfall-on-the-blurred-background.jpg?s=612x612&w=0&k=20&c=piIhc2R6dExYQ5X_7CnpPhJk8rCB7itK-PQ0pgsCai4=',
    '13n': 'https://media.istockphoto.com/id/863513024/photo/winter-scene-snowfall-on-the-blurred-background.jpg?s=612x612&w=0&k=20&c=piIhc2R6dExYQ5X_7CnpPhJk8rCB7itK-PQ0pgsCai4=',
    '50d': 'https://media.istockphoto.com/id/843702674/photo/window-with-condensate-or-steam-after-heavy-rain-large-texture-or-background.jpg?s=612x612&w=0&k=20&c=nQJr7lnrXBfLPUJ3UaxurYUfYt4EqQ-ufIBd9ujCecE=',
    '50n': 'https://media.istockphoto.com/id/843702674/photo/window-with-condensate-or-steam-after-heavy-rain-large-texture-or-background.jpg?s=612x612&w=0&k=20&c=nQJr7lnrXBfLPUJ3UaxurYUfYt4EqQ-ufIBd9ujCecE='
  };

  export default weatherBackgrounds;