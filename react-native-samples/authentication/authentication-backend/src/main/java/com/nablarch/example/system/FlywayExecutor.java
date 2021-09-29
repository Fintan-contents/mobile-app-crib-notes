package com.nablarch.example.system;

import nablarch.core.repository.initialization.Initializable;
import org.flywaydb.core.Flyway;
import org.flywaydb.core.api.Location;
import org.flywaydb.core.api.configuration.ClassicConfiguration;

import javax.sql.DataSource;
import java.util.Arrays;

public class FlywayExecutor implements Initializable {

    private DataSource dataSource;

    private String[] locations;

    private boolean cleanBeforeMigrate;

    public DataSource getDataSource() { return dataSource; }

    public void setDataSource(DataSource dataSource) { this.dataSource = dataSource; }

    public String[] getLocations() { return locations; }

    public void setLocations(String[] locations) { this.locations = locations; }

    public boolean isCleanBeforeMigrate() {
        return cleanBeforeMigrate;
    }
    public void setCleanBeforeMigrate(boolean cleanBeforeMigrate) {
        this.cleanBeforeMigrate = cleanBeforeMigrate;
    }

    @Override
    public void initialize() {
        ClassicConfiguration configuration = new ClassicConfiguration();
        configuration.setDataSource(dataSource);
        configuration.setLocations(Arrays.stream(this.locations).map(Location::new).toArray(Location[]::new));

        Flyway flyway = new Flyway(configuration);
        if (cleanBeforeMigrate) {
            flyway.clean();
        }
        flyway.migrate();
    }
}
