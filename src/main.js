import san, { DataTypes } from "san";

var MyApp = san.defineComponent({
    template: 
        `
            <div>
                <div>
                    <input name="name" type="text" placeholder="姓名" value="{= name =}">
                    <input name="age" type="number" placeholder="年龄" value="{= age =}" on-change="changeNumber(age)">
                    <input name="des" type="text" placeholder="简介" value="{= des =}">
                </div>
                <div><button on-click="remove">移除信息</button></div>
                <label for="">姓名：{{name}}</label>
                <label for="">年龄：{{age}}</label>
                <label for="">简介：{{des}}</label>
            </div>
        `,

    initData: function () {
        return {
            name: "",
            age: null,
            des: ""
        };
    },
    dataTypes: {
        name: DataTypes.string,
        age: DataTypes.number,
        des: DataTypes.string
    },
    remove: function() {
        this.data.set('name', "");
        this.data.set('age', null);
        this.data.set('des', "")
    },
    changeNumber: function (age) {
        this.data.set("age", parseInt(age))
    }
});


var myApp = new MyApp();
myApp.attach(document.body);