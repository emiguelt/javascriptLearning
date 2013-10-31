package dao;

import models.Wine;

import com.google.inject.Singleton;

@Singleton
public class WineDao extends AbstractDao<Wine> {

	public WineDao() {
		super();
	}

	@Override
	protected Class<Wine> getEntityClass() {
		return Wine.class;
	}

	public void addRandom() {
		long time = System.currentTimeMillis();
		save(buildWine("name_" + time, "grape_" + time, "country_" + time,
				"region_" + time, 1));
	}

	private Wine buildWine(String name, String grapes, String country,
			String region, int year) {
		Wine wine = new Wine();
		wine.setName(name);
		wine.setGrapes(grapes);
		wine.setCountry(country);
		wine.setRegion(region);
		wine.setYear(year);
		return wine;
	}

}
