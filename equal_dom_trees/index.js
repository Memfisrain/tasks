// TASK: You have two identical DOM trees. You were given arbitrary DOM node from tree1
// You should find the same DOM node in the second tree.
//-------------------------------------------------------------------------------------

// helper
const createTree = (id) => {
  const markup = `
    <div>
      <div>[1] - first child</div>
      <div>[1] - second child</div>
      <div>
        <div>[2] - first child</div>
        <div>
          [2] - second child
          <span>
            [3] - first child
            <strong>[4] - first child</strong>
          </span>
          <div>
            [3] - first child
            <span>I am here ${id}</span>
          </div>
        </div>
      </div>
    </div>
  `;

  const root = document.createElement('div');

  root.innerHTML = markup;
  root.style.display = 'inline-block';
  root.style.marginLeft = '50px';

  return root
};


// implementation
const getPath = (node, root, path = []) => {
  return node !== root ? getPath(node.parentNode, root, [...path, {ind: getIndex(node)}]) : path.reverse()
};

const getIndex = (node, ind = 0) => {
  return node && node.previousElementSibling ? getIndex(node.previousElementSibling, ind + 1) : ind
};

const findNode = (paths, root) => paths.reduce( (elem, child) => elem.children[child.ind], root);


// task
const tree1 = createTree(1);
const tree2 = createTree(2);

document.body.appendChild(tree1);
document.body.appendChild(tree2);

const node = tree1.querySelectorAll('div>div>div>span')[1];
node.style.color = 'red';

findNode( getPath(node, tree1), tree2).style.color = 'lime';





