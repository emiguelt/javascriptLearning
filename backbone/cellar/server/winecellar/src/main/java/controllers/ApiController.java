package controllers;

import ninja.Result;
import ninja.Results;
import ninja.Router;

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

    public Result addone() {
    	wineDao.addRandom();
    	return Results.redirect(router.getReverseRoute(ApiController.class, "getWineList"));
    	
    }

}
