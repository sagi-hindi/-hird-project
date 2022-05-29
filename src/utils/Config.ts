class Config{

}

class DevelopmentConfig extends Config {
    public isDevelopment = true;
    public vacationsAddFollow = "http://localhost:3001/api/vacations/add-follow/";
    public numberOfFollowersUrl = "http://localhost:3001/api/reports/vacations/";
    public vacationsRemoveFollow = "http://localhost:3001/api/vacations/remove-follow/";
    public url = "http://localhost:3001";
    public vacationsUrl = "http://localhost:3001/api/vacations/";
    public addVacationsUrl = "http://localhost:3001/api/vacations/add-vacation/";
    public vacationsImageUrl = "http://localhost:3001/api/vacations/images/";
    public registerUrl = "http://localhost:3001/api/auth/register/";
    public login = "http://localhost:3001/api/auth/login/";
}

class ProductionConfig extends Config {
    public isDevelopment = false;
    public vacationsAddFollow = "http://localhost:3001/api/vacations/add-follow/";
    public numberOfFollowersUrl = "http://localhost:3001/api/reports/vacations/";
    public vacationsRemoveFollow = "http://localhost:3001/api/vacations/remove-follow/";
    public url = "http://localhost:3001";
    public vacationsUrl = "http://localhost:3001/api/vacations/";
    public addVacationsUrl = "http://localhost:3001/api/vacations/add-vacation/";
    public vacationsImageUrl = "http://localhost:3001/api/vacations/images/";
    public registerUrl = "http://localhost:3001/api/auth/register/";
    public login = "http://localhost:3001/api/auth/login/";
}

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig() ;


export default config