import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose'
import _ from "lodash";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Use the MongoDB connection string from the environment variables
mongoose.connect(process.env.MONGODB_URI);

const itemSchema = new mongoose.Schema({
  task: String
})

const Item = mongoose.model("Item", itemSchema);

const item1 = new Item({
  task: "Welcome to your ToDo List"
});
const listSchema = new mongoose.Schema({
  name: String,
  items: [itemSchema]
})

const List = mongoose.model("List", listSchema);

// -------------------------------------------------------------------------//
// async function redirectCustumDomain(res, customDomainName, list) {
//       res.render("index.ejs", {
//         listTitle: customDomainName,
//         listItems: list,
//       });
//     }
// -------------------------------------------------------------------------//

app.get("/", async (req, res) => {

  try {
    const data = await Item.find({});
    if (data.length === 0 ) {
      try {
        await Item.insertMany([item1]);
        res.redirect("/");
      } catch (err) {
        console.log(err);
      }
    } else {
      res.render("index.ejs", {
        listTitle: "Today",
        listItems: data,
      });
    }
  } catch (err) {
    console.error("Unable to fetch data.", err);
  }
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  const listName = req.body.list;

  try {
    const newItem = new Item({
      task: item
    });
    if (listName === "Today") {
      await newItem.save();
    res.redirect("/");
    } else {
      const foundList = await List.findOne({name: listName});
      foundList.items.push(newItem);
      await foundList.save();
      res.redirect("/" + listName);
    }
  } catch (err) {
    console.error("facing difficulty in logging your item.",err)
  }
});

app.post("/edit", async (req, res) => {
  const id = req.body.updatedItemId;
  const item = req.body.updatedItemTitle;

  try {
    await Item.updateOne({_id: id}, {task: item});
    res.redirect("/");
  } catch (err) {
    console.error(err);
  }
});

app.post("/delete", async (req, res) => {
  const id = req.body.deleteItemId;
  const listName = req.body.listName;
  try {
    if (listName === "Today") {
    //   const data = await Item.find({_id: id});
    // console.log(`Successfully data ${data[0].task} from list`);
      await Item.deleteOne({_id: id});
      console.log("Successfully deleted checked item.");
      res.redirect("/");
    } else {
      try {
        await List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: id}}});
        res.redirect("/" + listName);
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.error(err);
  }
});

app.get("/:customListName", async (req, res) => {
  const customListName = _.capitalize(req.params.customListName);
  try {
    const foundList = await List.findOne({name: customListName});
    if (foundList) {
      res.render("index.ejs", {
        listTitle: customListName,
        listItems: foundList.items,
      });    } else {
      const list = new List({
        name: customListName,
        items : [item1]
      });
      await list.save();
      res.redirect("/" + customListName);
      // const listData = await List.findOne({name: customListName});
      // redirectCustumDomain(res, customListName, listData.items);
    }
  } catch (err) {
    console.log(err);
  }

})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});