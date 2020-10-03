// Node class
class Node {
    constructor(data) {
        //data
        this.data = data;
        //left child
        this.left = null;
        //right child
        this.right = null;
        // horizontaldistance from root
        this.HorizontalDistance = 0;
    }
}

// Binary Search tree class
class BinarySearchTree {
    constructor() {
        
        // root of a binary seach tree
        this.root = null;
        // this variable is used as reference variable in left and right view 
        this.Max_level = -1;
        // top view 
        this.TopView = "";
    }


    //insert util 
    // node is created and calls insertNode to insert node in the tree
    insert(data) {
        //new node
        var newNode = new Node(data);
        //root is null then node added 
        if (this.root === null)
            this.root = newNode;
        else
            //to find the position and add
            this.insertNode(this.root, newNode);
    }

    // Method to find the location and insert a node in a tree 
    insertNode(node, newNode) {
         // if the data is less than the node data move left of the tree 
        if (newNode.data < node.data) {
            // if left is null insert node here 
            if (node.left === null) {
                node.left = newNode;
                newNode.HorizontalDistance = node.HorizontalDistance - 1;
            }
            else
               // if left is not null recurr until  null is found 
                this.insertNode(node.left, newNode);
        }
        // if the data is more than the node data move right of the tree  
        else {
        // if right is null insert node here 
            if (node.right === null) {
                node.right = newNode;
                newNode.HorizontalDistance = node.HorizontalDistance + 1;
            }
             // if right is not null recurr until null is found
            else
                this.insertNode(node.right, newNode);
        }
    }

    //remove util and re-initialize root
    remove(data) {
        //root of re arranged tree
        this.root = this.removeNode(this.root, data);
    }

    // Method to remove node
    removeNode(node, key) {

        //find the position of node
        if (node === null)
            return null;

        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }

        else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        // node found with the data
        else {
                // deleting node with no children 
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            // deleting node with one children 
            if (node.left === null) {
                node = node.right;
                return node;
            }
             // Deleting node with two children 
            else if (node.right === null) {
                node = node.left;
                return node;
            }

            var minNode = this.findMinNode(node.right);
            node.data = minNode.data;

            node.right = this.removeNode(node.right, minNode.data);
            return node;
        }

    }
//  finds the minimum node in tree  searching starts from given node
    findMinNode(node) {
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }
    // returns root of the tree 
    getRootNode() {
        return this.root;
    }
    // inorder traversal of a tree
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    //preorder traversal of a tree
    preorder(node) {
        if (node != null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
    //postorder traversal of a tree
    postorder(node) {
        if (node != null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    //search for a node
    search(node, data) {
        if (node === null)
            return null;
        else if (data < node.data)
            return this.search(node.left, data);
        else if (data > node.data)
            return this.search(node.right, data);
        else
            return node;
    }

    //rightView
    rightViewPrint(node, level) {

        if (node == null)
            return;

        //Max Level holds the value for max reached  in tree traversal  in print the right view
        //level is level of the current node  
        if (this.Max_level < level) {
            //prints the data if it is first reached level for a given level
            console.log(node.data);
            this.Max_level = level;
        }
        
        //traverse all the tree
        this.rightViewPrint(node.right, level + 1);
        this.rightViewPrint(node.left, level + 1);
    }

    //right view util
    rightView(node) {
        this.Max_level = 0;
        this.rightViewPrint(node, 1);
    }
    
    //Left View
    LeftViewPrint(node, level) {

        if (node == null)
            return;
        //Max Level holds the value for max reached  in tree traversal  in print the right view
        //level is level of the current node  
        if (this.Max_level < level) {
            //prints the data if it is first reached level for a given level
            console.log(node.data);
            this.Max_level = level;
        }

        this.LeftViewPrint(node.left, level + 1);
        this.LeftViewPrint(node.right, level + 1);

    }

    //left View Util
    LeftView(node) {
        this.Max_level = -1;
        this.LeftViewPrint(node, 1);
    }


    //To print top view of the tree i first rght part of the tree and later left part of the tree
    //based on the horizontal distance from root the first vistited node is noted 
    //right part of top view
    //current distance is present node horizontal distance
    // visited distance is vistied horizontal distance  while noting nodes in top view
    TopRightPrint(node, currentDistance, vistedDistance) {
        if (node == null)
            return;
        if (currentDistance > vistedDistance) {
            this.TopView = this.TopView + " " + node.data;
            vistedDistance = currentDistance;
        }
        this.TopRightPrint(node.right, currentDistance + 1, vistedDistance);
        this.TopRightPrint(node.left, currentDistance - 1, vistedDistance);
    }
    //left part of top view
    TopLeftPrint(node, currentDistance, vistedDistance) {
        if (node == null)
            return;
        if (currentDistance < vistedDistance) {
            this.TopView = node.data + " " + this.TopView;
            vistedDistance = currentDistance;
        }

        this.TopLeftPrint(node.left, currentDistance - 1, vistedDistance);
        this.TopLeftPrint(node.right, currentDistance + 1, vistedDistance);
    }

    //top view helper method 
    TopViewPrint(node) {
        this.TopLeftPrint(node.left, -1, 0);
        this.TopView = this.TopView + "" + node.data;
        this.TopRightPrint(node.right, 1, 0);
        console.log(this.TopView);
    }


    //bottom view
    bottomView(Rootnode) {
        if (Rootnode == null)
            return;

        var hd = 0;
        var index = 0;
        var PushIndex=0;
        //maximum horizontal distance  to left
        var MinHd = hd;
        //maximum horizontal distance to right
        var MaxHd = hd;

        //to store the bottom view 
        var map = new Map();
        //vertical order traversing
        var queue = new Map([[0, Rootnode]]);

        while (queue.size != 0) {
            var Node = queue.get(index);
            // poping from queue
            queue.delete(index);

            hd = Node.HorizontalDistance;
            //updating reference varibles of horizontal distance 
            if (MinHd > hd)
                MinHd = hd;

            if (MaxHd < hd)
                MaxHd = hd;
            //update or add key pair <horizontal distance,data> for every horizontal distance 
            map.set(hd, Node.data);

            if (Node.left != null) {
                //pushing into queue
                PushIndex = PushIndex + 1;
                queue.set(PushIndex , Node.left);
            }

            if (Node.right != null) {
                //pushing into queue
                PushIndex = PushIndex + 1;
                queue.set(PushIndex , Node.right);
            }
            index =index +1;
        }

        for (var iterate = MinHd; iterate <= MaxHd; iterate++) {
            console.log(map.get(iterate));
        }


    }

}


var BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

var root = BST.getRootNode();

BST.inorder(root);

BST.remove(5);

var root = BST.getRootNode();

BST.inorder(root);

BST.remove(7);

var root = BST.getRootNode();

BST.inorder(root);

BST.remove(15);
BST.insert(23);
BST.insert(24);

var root = BST.getRootNode();

console.log("inorder traversal");
BST.inorder(root);

console.log("postorder traversal");
BST.postorder(root);

console.log("preorder traversal");
BST.preorder(root);

console.log("topview");
BST.TopViewPrint(root);

console.log("rightview");
BST.rightView(root);

console.log("leftview");
BST.LeftView(root);

console.log("bottomView");
BST.bottomView(root);
