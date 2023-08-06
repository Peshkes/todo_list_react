export default class TestData {
    static folders = [{
        name: '04.08.2023',
        tasks: [
            'Do IT', 'DO SOMETHING'
        ]
    },{
        name: '05.08.2023',
        tasks: [
            'Do not do anything'
        ]
    },{
        name: '06.08.2023',
        tasks: [
        ]}
    ];
    static startFolders = [{
        name: 'today',
        tasks: [
            'Do IT today', 'DO SOMETHING'
        ]
    },{
        name: 'tomorrow',
        tasks: [
            'Do IT tomorrow', 'DO SOMETHING'
        ]
    },{
        name: 'Home',
        tasks: [
            'Do IT', 'DO SOMETHING'
        ]
    },{
        name: 'My Project',
        tasks: [
            'Do not do anything'
        ]
    },{
        name: 'Vacation',
        tasks: [
        ]
    }];


    static getFolders () {
        let tmpArray = [];
        this.folders.map(item=>tmpArray.push(item.name));
        return tmpArray;
    }
    static getStartFolder () {
        let tmpArray = [];
        this.startFolders.map(item=>tmpArray.push(item.name));
        return tmpArray;
    }
    static getAllFolders () {
        let tmpArray = [];
        this.startFolders.map(item=>tmpArray.push(item.name));
        this.customFolders.map(item=>tmpArray.push(item.name));
        return tmpArray;
    }

}