import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

const initialUserData = {
  user: "",
  country: "",
  friends: 0,
  followings: 0,
  status: "pending",
};

function UserModalForm({ open, onClose, onSave, userData }) {
  const [user, setUser] = useState(userData?.user);
  const [country, setCountry] = useState(userData?.country);
  const [friends, setFriends] = useState(userData?.friends);
  const [followings, setFollowings] = useState(userData?.followings);
  const [status, setStatus] = useState(userData?.Status);

  const handleSave = () => {
    onSave({
      user,
      country,
      friends: parseInt(friends),
      followings: parseInt(followings),
      status,
    });
    setUser("");
    setCountry("");
    setFriends(0);
    setFollowings(0);
    setStatus("pending");
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{userData ===null ? "Add User" : "Edit User"}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Username"
          fullWidth
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Country"
          fullWidth
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Friends"
          fullWidth
          type="number"
          value={friends}
          onChange={(e) => setFriends(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Followings"
          fullWidth
          type="number"
          value={followings}
          onChange={(e) => setFollowings(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Status"
          fullWidth
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UserModalForm;
