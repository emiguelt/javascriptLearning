/**
 * Copyright (C) 2012 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package conf;

import ninja.AssetsController;
import ninja.Router;
import ninja.application.ApplicationRoutes;
import ninja.utils.NinjaProperties;

import com.google.inject.Inject;

import controllers.ApiController;
import controllers.WineCellarController;

public class Routes implements ApplicationRoutes {
    
    @Inject
    NinjaProperties ninjaProperties;

    /**
     * Using a (almost) nice DSL we can configure the router.
     * 
     * The second argument NinjaModuleDemoRouter contains all routes of a
     * submodule. By simply injecting it we activate the routes.
     * 
     * @param router
     *            The default router of this application
     */
    @Override
    public void init(Router router) {  

    	router.GET().route("/api/addone").with(ApiController.class, "addone");
    	router.GET().route("/part1").with(WineCellarController.class, "winePart1");
    	router.GET().route("/part2").with(WineCellarController.class, "winePart2");
    	
    	//api routes
    	router.GET().route("/api/wines").with(ApiController.class, "getWineList");
    	router.GET().route("/api/wines/{id}").with(ApiController.class, "getWineById");
    	router.POST().route("/api/wines").with(ApiController.class, "newWine");
    	router.PUT().route("/api/wines/{id}").with(ApiController.class, "updateWine");
    	router.DELETE().route("/api/wines/{id}").with(ApiController.class, "deleteWine");
    	
    	 ///////////////////////////////////////////////////////////////////////
        // Assets (pictures / javascript)
        ///////////////////////////////////////////////////////////////////////    
        router.GET().route("/assets/.*").with(AssetsController.class, "serve");
        
    }

}
