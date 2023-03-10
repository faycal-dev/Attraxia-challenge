import { Avatar, FormControl, MenuItem, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box } from "@mui/system";

type inputTypes = {
  items: { value: string; badgeNumber: number; badgeColor: string }[];
  OnChange?: (event: SelectChangeEvent) => void;
};

function CustomSelect(props: inputTypes) {
  const { items, OnChange, ...restProps } = props;
  return (
    <FormControl
      sx={{
        minWidth: 140,
        "& .MuiOutlinedInput-root": {
          "& > fieldset": {
            border: "none",
          },
        },
      }}
      size="small"
    >
      <Select
        labelId="select-label"
        id="simple-select"
        defaultValue={items[0].value}
        onChange={OnChange}
        {...restProps}
      >
        {items?.map((SelectItem) => (
          <MenuItem key={SelectItem.value} value={SelectItem.value}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography variant="caption">{SelectItem.value}</Typography>
              <Avatar
                sx={{
                  width: 24,
                  height: 24,
                  ml: 1,
                  bgcolor: SelectItem.badgeColor,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color:
                      SelectItem.badgeColor === "grey.300"
                        ? "common.black"
                        : "common.white",
                  }}
                >
                  {SelectItem.badgeNumber}
                </Typography>
              </Avatar>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CustomSelect;
