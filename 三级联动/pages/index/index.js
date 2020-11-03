//index.js
//获取应用实例
import {
    address
} from '../../utils/area'
const app = getApp()
Page({
    data: {
        multiIndex: [0, 0, 0], //每一级的下标
        multiArray: [
            [],
            [],
            []
        ],          //初始选择的位置
        addressInfo: "",
    },
    onShow() {
        this.datas = address.data;
        console.log(this.datas)
        let arr1 = [],
            arr2 = [],
            arr3 = [];
        let i1 = 0,
            i2 = 0;
        for (let x in this.datas) {
            arr1.push(this.datas[x].name);
        }
        for (let x in this.datas[i1].item) {
            arr2.push(this.datas[i1].item[x].name);
        }
        for (let x in this.datas[i1].item[i2].item) {
            arr3.push(this.datas[i1].item[i2].item[x].name);
        }

        let multiArray = this.data.multiArray;

        multiArray[0] = arr1;
        multiArray[1] = arr2;
        multiArray[2] = arr3;
        this.setData({
            multiArray: multiArray
        })
    },
    onLoad: function() {
    },
    bindMultiPickerColumnChange(e) {
        let column = e.detail.column;
        let value = e.detail.value;
        let multiIndex = this.data.multiIndex;
        multiIndex[column] = value;
        let arr1 = [],
            arr2 = [],
            arr3 = [];
        let multiArray = this.data.multiArray;
        let key1, key2, key3;
        key1 = multiIndex[0];
        key2 = multiIndex[1];
        key3 = multiIndex[2];
        for (let x in this.datas) {
            arr1.push(this.datas[x].name);
        }

        for (let x in this.datas[key1].item) {
            arr2.push(this.datas[key1].item[x].name);
        }
        for (let x in this.datas[key1].item[key2].item) {
            if (this.datas[key1].item[key2].item[x].name) {
                arr3.push(this.datas[key1].item[key2].item[x].name);
            } else {
                arr3.push(" ");
            }
        }
        console.log(arr1, arr2, arr3)
        console.log(key1, key2, key3);
        multiArray[0] = arr1;
        multiArray[1] = arr2;
        multiArray[2] = arr3;
        this.setData({
            multiArray: multiArray,
            multiIndex: multiIndex
        })
        this.addressInfo = {
            areas: multiArray[2][key3],
            city: multiArray[1][key2],
            province: multiArray[0][key1]
        };
        this.setData({
            addressInfo: this.addressInfo
        })
    },
})