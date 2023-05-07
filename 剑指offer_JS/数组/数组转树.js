const data = [
  { id: "01", name: "张大大", pid: "", job: "项目经理" },
  { id: "02", name: "小亮", pid: "01", job: "产品leader" },
  { id: "03", name: "小美", pid: "01", job: "UIleader" },
  { id: "04", name: "老马", pid: "01", job: "技术leader" },
  { id: "05", name: "老王", pid: "01", job: "测试leader" },
  { id: "06", name: "老李", pid: "01", job: "运维leader" },
  { id: "07", name: "小丽", pid: "02", job: "产品经理" },
  { id: "08", name: "大光", pid: "02", job: "产品经理" },
  { id: "09", name: "小高", pid: "03", job: "UI设计师" },
  { id: "10", name: "小刘", pid: "04", job: "前端工程师" },
  { id: "11", name: "小华", pid: "04", job: "后端工程师" },
  { id: "12", name: "小李", pid: "04", job: "后端工程师" },
  { id: "13", name: "小赵", pid: "05", job: "测试工程师" },
  { id: "14", name: "小强", pid: "05", job: "测试工程师" },
  { id: "15", name: "小涛", pid: "06", job: "运维工程师" },
];

function toTree(arr, parId) {
  function loop(parentId) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];

      if (item.pid !== parentId) {
        continue;
      }

      item.children = loop(item.id);
      res.push(item);
    }
    return res;
  }
  return loop(parId);
}

const getTree = (root, result, pid) => {
  for (let i = 0; i < root.length; i++) {
    if (root[i].pid == pid) {
      let item = { ...root[i], children: [] };
      result.push(item);
      getTree(root, item.children, item.id);
    }
  }
};

// 递归方法
const array2tree1 = (root, result, pid) => {
  for (let i = 0; i < root.length; i++) {
    if (root[i].pid === pid) {
      let item = { ...root[i], children: [] };
      result.push(item);
      array2tree(root, item.children, item.id);
    }
  }

  return result;
};

//map方法
const array2tree2 = (data) => {
  let result = [];
  let map = new Map();
  data.forEach((item) => {
    map[item.id] = item;
  });

  data.forEach((item) => {
    let parent = map[item.pid];
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      result.push(item);
    }
  });

  return result;
};

const arraytotree = (data) => {
  let res = [];
  let map = new Map();
  data.forEach((item) => {
    map[item.id] = item;
  });
  data.forEach((item) => {
    let parent = map[item.pid];
    if (parent) {
      if (!parent.children) {
        parent.children = [];
      }

      parent.children.push(item);
    }
    else {
      res.push(item)
    }
  });

  return res
};

console.log(array2tree2(data));
