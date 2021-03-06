let departments = [{
        "uuid": "uuid1",
        "name": "A组",
        "manager": "zhangsan",
        "parentUuid": "root",
        "vendorCount": 14,
        "children": []
    },
    {
        "uuid": "uuid2",
        "name": "A组的孩子",
        "manager": "zhangsan",
        "parentUuid": "uuid1",
        "vendorCount": 13,
        "children": []
    },
    {
        "uuid": "uuid3",
        "name": "A组的孩子的孩子1",
        "manager": "zhangsan",
        "parentUuid": "uuid2",
        "vendorCount": 10,
        "children": []
    },
    {
        "uuid": "uuid4",
        "name": "A组的孩子的孩子2",
        "manager": "zhangsan",
        "parentUuid": "uuid2",
        "vendorCount": 0,
        "children": []
    },
    {
        "uuid": "uuid5",
        "name": "B组",
        "manager": "zhangsan",
        "parentUuid": "root",
        "vendorCount": 14,
        "children": []
    },
    {
        "uuid": "uuid6",
        "name": "B组的孩子",
        "manager": "zhangsan",
        "parentUuid": "uuid5",
        "vendorCount": 8,
        "children": []
    },
    {
        "uuid": "uuid7",
        "name": "B组的孩子的孩子1",
        "manager": "zhangsan",
        "parentUuid": "uuid6",
        "vendorCount": 20,
        "children": []
    },
    {
        "uuid": "uuid8",
        "name": "B组的孩子的孩子2",
        "manager": "zhangsan",
        "parentUuid": "uuid6",
        "vendorCount": 3,
        "children": []
    },
    {
        "uuid": "zuuid9",
        "name": "C组",
        "manager": "王五",
        "parentUuid": "root",
        "vendorCount": 18,
        "children": []
    },
    {
        "uuid": "fxuuid10",
        "name": "C组的孩子",
        "manager": "dddds",
        "parentUuid": "zuuid9",
        "vendorCount": 4,
        "children": []
    },
    {
        "uuid": "uuid11",
        "name": "C组的孩子的孩子1",
        "manager": "dddds",
        "parentUuid": "fxuuid10",
        "vendorCount": 0,
        "children": []
    },
    {
        "uuid": "uuid12",
        "name": "C组的孩子的孩子2",
        "manager": "dddds1",
        "parentUuid": "fxuuid10",
        "vendorCount": 0,
        "children": []
    },
    {
        "uuid": "quuid13",
        "name": "C组的孩子2",
        "manager": "dddds1",
        "parentUuid": "zuuid9",
        "vendorCount": 4,
        "children": []
    },
    {
        "uuid": "duuid14",
        "name": "C组的孩子2的孩子1",
        "manager": "dddds2",
        "parentUuid": "quuid13",
        "vendorCount": 0,
        "children": []
    },
    {
        "uuid": "suuid15",
        "name": "C组的孩子2的孩子2",
        "manager": "dddds2",
        "parentUuid": "quuid13",
        "vendorCount": 0,
        "children": []
    },
    {
        "uuid": "auuid16",
        "name": "C组的孩子2的孩子3",
        "manager": "dddds2",
        "parentUuid": "quuid13",
        "vendorCount": 0,
        "children": []
    }
]
let obj = {}
let output = []
for (let i in departments) {
    obj[departments[i].uuid] = departments[i]
}
for (let i in departments) {
    let pid = departments[i].parentUuid
    let uid = departments[i].uuid
    let vendorCount = departments[i].vendorCount
    if (pid === 'root') {
        output.push(obj[uid])
            // treeObj = obj[uid]
    } else {
        if (obj[pid] && !obj[pid].children) {
            obj[pid].children = []
        } else {
            if (obj[pid]) {
                obj[pid].vendorCount = obj[pid].vendorCount + vendorCount
                obj[pid].children.push(
                    obj[uid]
                )
            }

        }
        // output.push(obj[uid])
    }
}
console.log(output)