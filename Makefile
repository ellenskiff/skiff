.PHONY: build
build:
	pub run build_runner build --release --output build
	rm -r docs
	mv build/web docs
	cd docs && echo "ellenskiff.com" >> CMAKE
	rm -f packages/