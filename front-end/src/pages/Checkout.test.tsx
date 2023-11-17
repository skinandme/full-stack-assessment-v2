import { render, screen } from "@testing-library/react";
import Checkout from "./Checkout";

describe("Checkout", () => {
	test("renders the page title", () => {
		render(<Checkout title="Review your order" />);
		const pageTitle = screen.getByRole("heading", {
			level: 1,
			name: "Review your order",
		});

		expect(pageTitle).toBeInTheDocument();
	});
});
