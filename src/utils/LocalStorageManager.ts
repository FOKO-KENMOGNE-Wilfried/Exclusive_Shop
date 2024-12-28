import LocalStorageData from "./Types/LocalStorageData";

export default abstract class LocalStorageManager {
    private static storageKey = "userData";

    /**
     * To set the localstorage data
     * 
     * @param userData
     */
    public static saveData(userData: LocalStorageData) {
        localStorage.setItem(LocalStorageManager.storageKey, JSON.stringify(userData));
    }

    /**
     * To get the localstorage data
     * 
     * @returns the local storage data
     */
    public static loadData(): LocalStorageData {
        const userData = localStorage.getItem(LocalStorageManager.storageKey);
        return userData ? JSON.parse(userData) : null;
    }

    /**
     * To empty the localstorage data
     */
    public static removeData() {
        localStorage.removeItem(LocalStorageManager.storageKey);
    }
}