export default class TestData {
    static folders = [{
        name: '04.08.2023',
        tasks: [
            'Do IT', 'DO SOMETHING'
        ]},{
        name: '05.08.2023',
        tasks: [
            'Do not do anything'
        ]},{
        name: '06.08.2023',
        tasks: [
        ]}
    ];

    static customFolders = [{
        name: 'Home',
        tasks: [
            'Do IT', 'DO SOMETHING'
        ]},{
        name: 'My Project',
        tasks: [
            'Do not do anything'
        ]},{
        name: 'Vacation',
        tasks: [
        ]}
    ];

    static getFolders () {
        let tmpArray = [];
        this.folders.map(item=>tmpArray.push(item.name))
        return tmpArray;
    }
    static getCustomFolders () {
        let tmpArray = [];
        this.customFolders.map(item=>tmpArray.push(item.name))
        return tmpArray;
    }

}