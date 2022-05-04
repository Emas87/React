import React, { useState, createRef, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";

const SearchableMenu = React.forwardRef(
	({ children, style, className, "aria-labelledby": labeledBy, open }, ref) => {
		const inputRef = createRef();
		const [searchTerm, setSearchTerm] = useState("");

		useEffect(() => {
			if (open) inputRef.current.focus();
		}, [open, inputRef]);
		return (
			<div
				ref={ref}
				style={style}
				className={className}
				aria-labelledby={labeledBy}
			>
				<FormControl
					ref={inputRef}
					autoFocus
					className="mx-3 my-2 w-auto"
					placeholder="Type to filter..."
					onChange={e => setSearchTerm(e.target.value)}
					value={searchTerm}
				/>
				<ul className="list-unstyled">
					{React.Children.toArray(children).filter(
						child =>
							!searchTerm ||
							child.props.children.toLowerCase().startsWith(searchTerm)
					)}
				</ul>
			</div>
		);
	}
);

const DropdownSearchable = ({
	items = [],
	onItemSelected = null,
	onClosed = null,
	name = "Default",
}) => {
	const [open, setOpen] = useState(false);
	const onToggle = (isOpen, metadata) => {
		if (metadata.source === "select") {
			setOpen(true);
			return;
		} else {
			if (onClosed) onClosed();
		}
		setOpen(isOpen);
	};
	const [selectedItem, setSelectedItem] = useState(null);

	const onSelected= (event, item) => {
		setSelectedItem(item);
		if (onItemSelected) onItemSelected(event);
	}
	return (
		<Dropdown onToggle={onToggle}>
			<Dropdown.Toggle variant="secondary">
				{selectedItem != null ? selectedItem.name : name}
				</Dropdown.Toggle>
			<Dropdown.Menu as={SearchableMenu} isOpen={open}>
				{items.map(item => {
					return (
						<Dropdown.Item
							key={item.id}
							as="button"
							onClick={(event) => (onItemSelected ? onSelected(event, item) : null)}
						>
							{item.name}
						</Dropdown.Item>
					);
				})}
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default DropdownSearchable;
