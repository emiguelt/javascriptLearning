package controllers;

import models.Wine;
import models.WineDto;
import ninja.Result;
import ninja.Results;
import ninja.Router;
import ninja.params.Param;
import ninja.params.PathParam;
import ninja.validation.JSR303Validation;

import com.google.inject.Inject;
import com.google.inject.Singleton;

import dao.WineDao;

@Singleton
public class ApiController {

    @Inject
    WineDao wineDao;

    @Inject
    Router router;

    public Result getWineList() {

        return Results.json().render(wineDao.getList(0, null));

    }

    public Result getWineById(@PathParam("id") Long id) {
        return Results.json().render(wineDao.get(id));
    }

    public Result newWine( WineDto wine) {
        return saveWine(null, wine.name, wine.grapes,
                wine.country, wine.region, Integer.valueOf(wine.year));
    }

    public Result updateWine(@PathParam("id") Long id,
                             WineDto wine) {
        return saveWine(id, wine.name, wine.grapes,
                wine.country, wine.region, Integer.valueOf(wine.year));
    }

    public Result deleteWine(@PathParam("id") Long id) {
        wineDao.delete(id);
        return Results.json().render("success", true);
    }

    private Result saveWine(Long id,
                            String name,
                            String grapes,
                            String country,
                            String region,
                            Integer year) {
        Wine wine = wineDao.buildWine(name, grapes, country, region, year);
        wine.setId(id);
        return Results.json().render(wineDao.save(wine));
    }

    public Result addone() {
        wineDao.addRandom();
        return Results.redirect(router.getReverseRoute(ApiController.class,
                "getWineList"));

    }

}
