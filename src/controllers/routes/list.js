import { getAllRoutes, getListOfRegions, getListOfSeasons } from '../../models/model.js';

export default async (req, res) => {
    const { region, season } = req.query;
    const regions = await getListOfRegions();
    const routes = await getAllRoutes();
    const seasons = await getListOfSeasons();

    let filteredRoutes = routes;

    if (region) {
        filteredRoutes = filteredRoutes.filter(route => route.region === region);
    }

    if (season) {
        filteredRoutes = filteredRoutes.filter(route => route.bestSeason === season);
    }

    res.render('routes/list', {
        title: 'Scenic Train Routes',
        regions,
        routes: filteredRoutes,
        seasons,
        selectedRegion: region,
        selectedSeason: season
    });
};